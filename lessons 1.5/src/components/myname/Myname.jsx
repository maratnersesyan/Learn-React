import'./Myname.css';

export function MyName() {
    const rockGroups = ['Deep Purple', "Led Zeppelin", "Black Sabbath" ]
    return (
        <>
            <h2>Рок группы</h2>
            <ul>
                {
                    rockGroups.map(group => (
                        <li key={group}>{group}</li>
                    ))
                }
            </ul>
        </>
    )
}