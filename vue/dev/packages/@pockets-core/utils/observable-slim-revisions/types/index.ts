import ObservableSlim from "@pockets-core/utils/observable-slim"

export type direction = "undo" | "redo"

export type revision = {
    currentPath: string
    type: "add" | "update" | "delete"
    property: unknown
    proxy: unknown
    previousValue: unknown
    newValue: unknown
    observablePaused: boolean
}

export type revisions = Array< revision >

export type observable = InstanceType<ObservableSlim>

export type applyRevisionsState = {
    direction: direction
    /*
        $revisions is a copy of revisions passed in. In the event 
        direction is undo, they will be reversed in relation to revisions
    */
    $revisions: revisions 
    revisions: revisions
}

export type filters = {
    beforeTracker: ( revisions: revisions ) => revisions
    afterRevisions: ( state: applyRevisionsState ) => void
    beforeRevisions: ( state: applyRevisionsState ) => void
}
