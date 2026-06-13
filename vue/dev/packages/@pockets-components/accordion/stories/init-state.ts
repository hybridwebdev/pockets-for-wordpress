
export let initState = () => ( {
    props: {
        mode: "single",
        minOpen: 0,
        accordion: {
            triggerOptions: { 
                open: 'active', 
                closed: '',
                class: "btn btn-accent-dk"
            },
            itemOptions: {
                open: '', 
                closed: '',
                class: "bg-accent-dk border border-5 border-accent-md"
            },
            contentOptions: {
                open: '', 
                closed: '',
                class: "p-2 bg-white text-black"
            }
        },
        options: {
            triggerOptions: { 
                open: 'active', 
                closed: '',
                class: "btn btn-primary-dk"
            },
            itemOptions: {
                open: '', 
                closed: '',
                class: "bg-accent-dk border border-5 border-accent-md"
            },
            contentOptions: {
                open: '', 
                closed: '',
                class: "p-2 bg-black"
            }
        },
    }
} )