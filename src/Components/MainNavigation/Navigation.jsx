import './Navigation.scss';
export const Navigation = () => {
    return (
        <nav className="nav">
            <ul className="list">
                <li className="item">
                    <svg className="nav-svg" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h48v48H0z" fill="none"></path>
                        <path d="M6 26h16V6H6v20zm0 16h16V30H6v12zm20 0h16V22H26v20zm0-36v12h16V6H26z" fill="#987284"
                              className="fill-000000"></path>
                    </svg>
                    Dashboard
                </li>
                <li className="item">
                    <svg className="nav-svg" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M302.1 358.1c-8.9 49.7-50.7 81.3-110.1 88.3V480c0 17.67-14.28 32-31.96 32S128 497.7 128 480v-34.96c-.443-.065-.836-.031-1.281-.098-26.19-3.766-53.69-13.2-77.94-21.53l-11.03-3.766C21.03 414 12.03 395.8 17.69 379.1s23.88-25.73 40.56-20.08l11.31 3.859c21.59 7.406 46.03 15.81 66.41 18.73 47.09 6.953 97.06-.844 103.1-34.09 5.188-28.55-11.16-39.89-87.53-60.7L136.5 282.7C92.59 270.4 1.25 244.9 17.97 153 26.82 104.1 68.44 72.48 128 65.51V32c0-17.67 14.33-32 32.02-32S192 14.33 192 32v34.95c.441.063.84.045 1.281.111 16.91 2.531 36.22 7.47 60.72 15.55 16.81 5.531 25.94 23.61 20.41 40.41-5.531 16.77-23.69 25.86-40.41 20.38-20.72-6.812-37.12-11.08-50.16-13.02C137 123.4 86.97 131.2 80.91 164.5 76.5 188.8 85.66 202 153.8 221l14.59 4.016C228.3 241.4 318.9 266.1 302.1 358.1z"
                            fill="#987284" className="fill-000000"></path>
                    </svg>
                    Sales
                </li>
                <li className="item">
                    <svg className="nav-svg" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.996 6.748a1.248 1.248 0 1 1-2.496 0 1.248 1.248 0 0 1 2.496 0ZM2 5.25A3.25 3.25 0 0 1 5.25 2h9a3.25 3.25 0 0 1 3.25 3.25v9a3.25 3.25 0 0 1-3.25 3.25h-9A3.25 3.25 0 0 1 2 14.25v-9ZM5.25 3.5A1.75 1.75 0 0 0 3.5 5.25v9c0 .231.045.451.126.653l4.587-4.29a2.25 2.25 0 0 1 3.074 0l4.587 4.29c.081-.201.126-.422.126-.653v-9a1.75 1.75 0 0 0-1.75-1.75h-9Zm9.517 12.422-4.505-4.214a.75.75 0 0 0-1.025 0l-4.504 4.214c.163.05.337.078.517.078h9c.18 0 .354-.027.517-.078ZM6.499 18.75v-.25H14.5a4 4 0 0 0 4-4v-8h.249a3.25 3.25 0 0 1 3.25 3.25v7c0 2.9-2.35 5.25-5.25 5.25h-7a3.25 3.25 0 0 1-3.25-3.25Z"
                            fill="#987284" className="fill-212121"></path>
                    </svg>
                    Catalog
                </li>
                <li className="item">
                    <svg className="nav-svg" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM17 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 0 0-1.5-4.33A5 5 0 0 1 19 16v1h-6.07ZM6 11a5 5 0 0 1 5 5v1H1v-1a5 5 0 0 1 5-5Z"
                            fill="#987284" className="fill-4a5568"></path>
                    </svg>
                    Customers
                </li>
                <li className="item">
                    <svg className="nav-svg" viewBox="0 0 50 50"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 39.293h10v9.414l9.414-9.414H49v-38H1v38zm2-36h44v34H19.586L13 43.879v-6.586H3v-34z"
                              fill="#987284" className="fill-000000"></path>
                        <path d="M7 7.293h36v2H7zM7 13.293h36v2H7zM7 19.293h36v2H7zM7 25.293h36v2H7zM7 31.293h36v2H7z"
                              fill="#987284"
                              className="fill-000000"></path>
                    </svg>
                    Reviews
                </li>
            </ul>
        </nav>
    )
}