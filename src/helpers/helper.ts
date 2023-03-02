export function getRandomNumber(length: number): number {
    return Math.floor(Math.random() * length - 1);
}

export function truncate(str: string, width: number) {
    return str?.length > width ? str.substring(0, width - 1) + "..." : str;
}