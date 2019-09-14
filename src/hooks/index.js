export function useLanguage() {
    let _data = {};

    const _collect = (lang) => {
        const { name, color, size, count } = lang;

        if (name in _data) {
            _data[name].size += size / 1000
            _data[name].count += count
        } else {
            _data[name] = {
                name,
                color,
                size: size / 1000,
                count
            }
        };
    }
    return [_data, _collect]
}