import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T){
    const [value, setValue] = useState<T>(() => {
        if (typeof window === 'undefined') return initialValue; // Se estiver no lado do servidor, retorna o valor inicial
        const storedValue = localStorage.getItem(item);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    useEffect(() => {
        if (typeof window === 'undefined' || typeof localStorage === 'undefined') return;
        const storedValue = localStorage.getItem(item);
        if (storedValue) setValue(JSON.parse(storedValue));
    }, [item]);

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}
