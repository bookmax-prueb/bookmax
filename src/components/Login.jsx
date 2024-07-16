const Login = () => {
  return (
    <>
    <div className="section">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-one-third">
                    <div className="box">
                        <form>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input 
                                    className="input"
                                    type="text"
                                    placeholder="email@example.com"
                                    name="email" 
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input 
                                    className="input"
                                    type="password"
                                    placeholder="********"
                                    name="password"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <button
                                type="submit"
                                className="button is-fullwidth is-primary"
                                >
                                    Enviar
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Login