import type {NextPage} from 'next'

const Form: NextPage = () => {
    return <form action="/api/form" method="POST">
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" autoComplete="email" name="email" required={true}/>
        </div>
        <button>Submit</button>
    </form>
}

export default Form