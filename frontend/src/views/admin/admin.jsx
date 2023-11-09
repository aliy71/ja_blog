import { Input } from "../../ui";

const Admin = () => {
    return ( 
        <section className="admin" id="admin">
            <div className="admin__field container">
                <h1>App blogs</h1>
                <div className="field">
                    <div className="admin__blog__title">
                        <form >
                            <Input title={'title'} changeHandlerFn={''} />
                            <Input title={'description'} changeHandlerFn={''}/>
                            <Input title={'tags'} changeHandlerFn={''}/>
                        </form>
                    </div>
                    <div className="admin__blog__main">

                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Admin;