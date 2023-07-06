
const convertDate = (currentDate: Date) => {
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}.${month}.${year}`;
}

export function formatDate(date: string, split: string): string {
    const parts = date.split(`${split}`);
    const month = parts[0].padStart(2, '0');
    const day = parts[1].padStart(2, '0');
    const year = parts[2];
    return `${month} ${day}, ${year}`;
}

export function formatDate2Export(date: string): string {
    const parts = date.split(' ');
    const month = parts[1].padStart(2, '0');
    const day = parts[2].padStart(2, '0');
    const year = parts[3];
    return `${day}.${month}.${year}`;
}

