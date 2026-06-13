import { rotateIndex } from "@pockets-core/utils/dot-prop/array"

describe('Rotate index', () => {
  
  let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

  test( "Basic test", () => {
    expect( rotateIndex( arr, 0, 3 ) ).toBe( 3 )
    expect( rotateIndex( arr, 10, 2 ) ).toBe( 1 )
    
    expect( rotateIndex( arr, 0, -2 ) ).toBe( 9 )
    // wrap around twice
    expect( rotateIndex( arr, 0, 22 ) ).toBe( 0 )

  } )
})
