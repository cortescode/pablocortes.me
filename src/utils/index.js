// This function validate if a integer is a position of a list


export function validateNumberIntoList(n, list) {
    const listLastPosition = list.length - 1;
    if(n > listLastPosition) {
        return 0;
    } else if(n<0) {
        return listLastPosition;
    }
    return n;
}
