import { reactive } from "vue"

import observableSlim from "@pockets-core/utils/observable-slim"
import { useRevisions } from "@pockets-core/utils/observable-slim-revisions"
import { $object } from "@pockets-core/utils"

let testFactory = () => {

  let observablePromise = null

  let $getter = path => $object.get( observable, path )

  let $setter = async (path, value) => new Promise( resolve => {
    observablePromise = resolve
    $object.set( observable, path, value )
  } )

  let state = reactive( {
    root: {
      text: "1",
    }
  } )
  
  let observable = observableSlim.create( state, 100, () => observablePromise() )

  let revisions = useRevisions( observable )

  return {
    revisions,
    $getter,
    $setter
  }

}

test( 'Basic test 1', async() => {
  
  let {
    revisions,
    $getter,
    $setter
  } = testFactory()

  await $setter( 'root.text', "2" )
  expect( $getter( 'root.text') ).toBe('2')

  revisions.undo()
  expect( $getter( 'root.text') ).toBe('1')

  await $setter('root.text', "3")
  expect( $getter( 'root.text') ).toBe('3')
  
  revisions.undo()
  expect( $getter( 'root.text') ).toBe('1')

  revisions.redo()
  expect( $getter( 'root.text') ).toBe('3')

}, 20000 ) 
 

test( 'Basic test 2', async() => {
  
  let {
    revisions,
    $getter,
    $setter
  } = testFactory()

  $setter( 'root.text', "2" )
  expect( $getter( 'root.text') ).toBe('2')
  $setter( 'root.text', "3" )
  expect( $getter( 'root.text') ).toBe('3')
  $setter( 'root.text', "4" )
  expect( $getter( 'root.text') ).toBe('4')

  await $setter( 'root.text', "5" )

  revisions.undo()

  expect( $getter( 'root.text') ).toBe('1')

}, 20000 ) 

test( 'Basic test 3', async() => {
  
  let {
    revisions,
    $getter,
    $setter
  } = testFactory()

  await $setter( 'root.text', "2" )
  await $setter( 'root.text', "3" )
  await $setter( 'root.text', "4" )
  await $setter( 'root.text', "5" )

  revisions.undo()
  revisions.undo()
  revisions.undo()
  revisions.undo()  
  
  expect( $getter( 'root.text') ).toBe('1')
  revisions.redo()  
  expect( $getter( 'root.text') ).toBe('2')

}, 20000 ) 

test( 'Basic test 4', async() => {
  
  let {
    revisions,
    $getter,
    $setter
  } = testFactory()

  await $setter( 'root.text', "2" )
  await $setter( 'root.text', "3" )

  revisions.undo()
  revisions.undo()  
  await $setter( 'root.text', "4" )
  revisions.undo()  
  expect( $getter( 'root.text') ).toBe('1')
  revisions.redo()  
  expect( $getter( 'root.text') ).toBe('4')

}, 20000 ) 
 

test( 'Basic Test 5', async() => {
  
  let {
    revisions,
    $getter,
    $setter
  } = testFactory()

  await $setter( 'root.text', "2" )
  await $setter( 'root.text', "3" )

  revisions.undo()
  
  expect( $getter( 'root.text') ).toBe('2')
  await $setter( 'root.text', "3" )
  expect( $getter( 'root.text') ).toBe('3')
  revisions.undo()
  expect( $getter( 'root.text') ).toBe('2')
  revisions.undo()
  expect( $getter( 'root.text') ).toBe('1')
  
}, 20000 ) 
 


