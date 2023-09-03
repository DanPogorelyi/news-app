export function getQueryParams(params: Record<string, string> = {}): string {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([key, value]) => {
        searchParams.set(key, value);
    });

    return `?${searchParams.toString()}`;
}

export function addQueryParams(params: Record<string, string>) {
    window.history.pushState({}, 'xer', getQueryParams(params));
}
