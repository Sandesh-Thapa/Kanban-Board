export type task = {
    id: string,
    title: string,
    description?: string
}

export type section = {
    id: string,
    name: string,
    tasks: task[]
}