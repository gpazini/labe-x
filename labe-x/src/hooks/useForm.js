import { useState } from "react"

export const useForm = (inicialState) => {
    const [form, setForm] = useState(inicialState)
    
    const onChange = (ev) => {
        const {name, value} = ev.target
        setForm({...form, [name]: value })
    }
    const cleanFields = () => {
        setForm(inicialState)
    }
    return {form, onChange, cleanFields}
}