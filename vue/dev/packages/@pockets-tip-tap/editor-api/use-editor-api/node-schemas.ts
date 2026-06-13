import type { nodeSchema } from "@pockets-tip-tap"

export let nodeSchemas:Array<nodeSchema>= [
    {
        title: "Paragraph",
        name: 'paragraph',
        fields: ['text-styling', 'link']
    },
    {
        title: "Code Block",
        name: "codeBlock",
        fields: []
    },
    {
        title: "Heading",
        name: 'heading',
        fields: ['text-styling', 'link']
    },
]