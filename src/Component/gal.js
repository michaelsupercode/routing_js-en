import Nav from "./Nav";

export default function Gallery() {
    return (
        <section>
            <Nav />
            <div className="gal">
                <img src="https://images.unsplash.com/photo-1646863106570-43e78a636cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1646864052344-26234c622673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1646868776721-13cbc9cd81e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
            </div>
        </section>
    )
}