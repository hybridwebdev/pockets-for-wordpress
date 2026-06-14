
import { circularSlice } from "@pockets-core/utils/dot-prop/array"
 
describe('CircularSlice basic tests', () => {

  /**
    slice is immutable so tests can share data and confirm immutability. 
  */
  let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

  test( 'Normal Slice 1', () => {

    expect( circularSlice( arr, 0, 2) ).toStrictEqual( [ 0, 1 ] )
    expect( circularSlice( arr, 0, 11) ).toStrictEqual( arr )
    expect( circularSlice( arr, 0, 100) ).toStrictEqual( arr )
    
  } ) 
  
  test( 'Wrap around slice 1', () => {
    
    expect( circularSlice( arr, 8, 6) ).toStrictEqual( [ 8, 9, 10, 0, 1, 2  ] )
    
  } ) 
  
  test( 'Slice passed end of array length', () => {
    
    expect( circularSlice( [], 0, 1 ) ).toStrictEqual( [] )
    expect( circularSlice( [0], 0, 6 ) ).toStrictEqual( [ 0 ] )
    
  } ) 

} )

describe('circularSlice extended', () => {

    const arr = [0, 1, 2, 3, 4];
    const singleElementArr = [0];
    const emptyArr = [];
    const anotherArr = [0, 1, 2];
    
    test('returns values correctly', () => {
        expect(circularSlice(arr, 3, 3)).toStrictEqual([3, 4, 0]);
        expect(circularSlice(arr, 0, 2)).toStrictEqual([0, 1]);
        expect(circularSlice(arr, 2, 5)).toStrictEqual([2, 3, 4, 0, 1]);
    });

    test('returns indexs correctly', () => {
        expect(circularSlice(arr, 3, 3, 'indexs')).toStrictEqual([3, 4, 0]);
        expect(circularSlice(arr, 0, 2, 'indexs')).toStrictEqual([0, 1]);
        expect(circularSlice(arr, 2, 5, 'indexs')).toStrictEqual([2, 3, 4, 0, 1]);
    });

    test('returns both values and indexs correctly', () => {
        expect(circularSlice(arr, 3, 3, 'both')).toStrictEqual([
            { index: 3, value: 3 },
            { index: 4, value: 4 },
            { index: 0, value: 0 }
        ]);
        expect(circularSlice(arr, 0, 2, 'both')).toStrictEqual([
            { index: 0, value: 0 },
            { index: 1, value: 1 }
        ]);
        expect(circularSlice(arr, 2, 5, 'both')).toStrictEqual([
            { index: 2, value: 2 },
            { index: 3, value: 3 },
            { index: 4, value: 4 },
            { index: 0, value: 0 },
            { index: 1, value: 1 }
        ]);
    });

    test('handles empty array', () => {
        expect(circularSlice(emptyArr, 0, 6)).toStrictEqual([]);
        expect(circularSlice(emptyArr, 0, 6, 'indexs')).toStrictEqual([]);
        expect(circularSlice(emptyArr, 0, 6, 'both')).toStrictEqual([]);
    });

    test('handles single element array', () => {
        expect(circularSlice(singleElementArr, 0, 6)).toStrictEqual([0]);
        expect(circularSlice(singleElementArr, 0, 6, 'indexs')).toStrictEqual([0]);
        expect(circularSlice(singleElementArr, 0, 6, 'both')).toStrictEqual([{ index: 0, value: 0 }]);
    });

    test('handles starting index and length', () => {
        expect(circularSlice(anotherArr, 1, 4)).toStrictEqual([1, 2, 0]);
        expect(circularSlice(anotherArr, 1, 4, 'indexs')).toStrictEqual([1, 2, 0]);
        expect(circularSlice(anotherArr, 1, 4, 'both')).toStrictEqual([
            { index: 1, value: 1 },
            { index: 2, value: 2 },
            { index: 0, value: 0 }
        ]);
    });
});