export function getPageCount (totalCount: number, limit: number) {
    return Math.ceil(totalCount / limit)
}

export function getPagesArray (totalPages: number): number[] {
    let result: number[] = [];
    for (let i: number = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result;
}
