export default function Validitefu({ values }) {

    const error = {}
    if (values.name === '') {
        error.name = 'enter valid name'
    }

    if (values.email === '') {
        error.email = 'enter valid email'
    }

    return error

}