export class StringFormatter {
    static format(str:string, arg:any[]) {
        let formatted = str;
        for (let i = 0; i < arg.length; i++) {
            let regexp = new RegExp('\\{'+i+'\\}', 'gi');
            formatted = formatted.replace(regexp, arg[i]);
        }
        return formatted;
    }
}