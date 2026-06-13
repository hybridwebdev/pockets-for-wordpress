import Masonry from 'masonry-layout'

const masonryKey = Symbol('masonry')

/**
    @description A directive that creates a masonry grid on the target element. Utililizes the <a href='https://www.npmjs.com/package/masonry-layout?client_id=1805037142.1778371202&session_id=1778371202'>Masonry Layout</a> library.
    For all options, visit <a href='https://masonry.desandro.com/options#gutter'>Masonry Options</a>.

    @property {string<css selector>} [stamp=.stamp] - Specifies which elements are stamped within the layout. Masonry will layout items below stamped elements. The stamp option stamps elements only when the Masonry instance is first initialized. You can stamp additional elements afterwards with the stamp method.
    @property {string<css selector>} [itemSelector=.grid-item] - Target class for items in the masonry grid
    @property {number} [columnWidth] - Size of columns
    @property {string} [gutter] - gap between items
    @property {boolean} [fitWidth=true] Sets the width of the container to fit the available number of columns, based the size of container's parent element. When enabled, you can center the container with CSS.
    @property {boolean} [percentPosition] Sets item positions in percent values, rather than pixel values. percentPosition: true works well with percent-width items, as items will not transition their position on resize.
    @property {boolean} [horizontalOrder] Lays out items to (mostly) maintain horizontal left-to-right order.
*/
export default {
    
    mounted( el, binding ) {
        
        let options = {
            itemSelector: '.grid-item',
            ...binding.value ?? {}
        }
 
        el[masonryKey] = new Masonry( el, options )  

    },
    
    updated(el) {
        el[masonryKey].layout() 
    },

    unmounted(el) {
        el[masonryKey].destroy() 
    }

}