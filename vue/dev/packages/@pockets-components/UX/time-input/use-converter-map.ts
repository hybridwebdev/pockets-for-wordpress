export let useConverterMap = ( options = { secondsFixed: 2 } ) => ({
    dhms: {
        columns: 4,
        render: [ 'days', 'hours', 'minutes', 'seconds' ],
        to: (parts: any) => (
            (Number(parts.d) || 0) * 86400 +
            (Number(parts.h) || 0) * 3600 +
            (Number(parts.m) || 0) * 60 +
            (Number(parts.s) || 0)
        ),
        from: ( total ) => ({
            d: Math.floor(total / 86400),
            h: Math.floor((total % 86400) / 3600),
            m: Math.floor((total % 3600) / 60),
            s: (total % 60).toFixed( options.secondsFixed )
        })
    },
    hms: {
        columns: 3,
        render: [ 'hours', 'minutes', 'seconds' ],
        to: (parts: any) => (
            (Number(parts.h) || 0) * 3600 +
            (Number(parts.m) || 0) * 60 +
            (Number(parts.s) || 0)
        ),
        from: (total: number) => ({
            h: Math.floor(total / 3600),
            m: Math.floor((total % 3600) / 60),
            s: (total % 60).toFixed( options.secondsFixed )
        })
    }
} )