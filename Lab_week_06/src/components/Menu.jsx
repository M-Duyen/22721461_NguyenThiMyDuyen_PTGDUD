export default function Menu() {
    const menu = [
        { id: 1, name: 'Trang chủ' },
        { id: 2, name: 'Thực đơn' },
        { id: 3, name: 'Liên hệ' }]
    return (
        <div className="flex justify-center items-center h-full">
            <ul className="flex gap-18">
                {menu.map((item) => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>


        </div>
    )

}
