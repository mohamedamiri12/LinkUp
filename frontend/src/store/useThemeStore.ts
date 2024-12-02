import {create} from "zustand"


export const useThemeStore = create<any>((set) => ({
    theme: localStorage.getItem("chat-theme") || "night",
    setTheme: (theme:any) => {
        localStorage.setItem("chat-theme",theme)
        set({theme}) 
    } 
}))