function Layout({children}) {
    return ( 
        <>
        {/* <nav className="mb-5 flex flex-row gap-2 justify-between items-center">
           <div>Components</div>
           <div>this is nav</div>
           <div>this is nav</div>
        </nav> */}
        <main className="p-4 flex flex-col gap-2 items-center">{children}</main>
        </>
     );
}

export default Layout;