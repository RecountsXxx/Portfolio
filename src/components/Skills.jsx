export default function Skills(){
    return(
        <>
            <div className="container-fluid mt-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-white flow-around">Technologies</h1>
                <div className="container-fluid mt-5 gap-5 d-flex justify-content-center align-items-center experience-items">
                    <div>
                        <div className="card mb-4 rounded-3 shadow-sm p-1 bg-transparent border-dark">
                            <div className="card-header py-3">
                                <h2 className="text-white my-0 fw-normal">Frontend</h2>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mb-4">
                                    <h3 className="fs-4 badge bg-secondary">HTML, CSS, SCSS</h3><br />
                                    <h3 className="fs-4 badge bg-secondary">JavaScript, TypeScript</h3><br />
                                    <h3 className="fs-4 badge bg-secondary">React, Angular</h3><br />
                                    <h3 className="fs-4 badge bg-secondary">Redux, Bootstrap, Tailwind</h3>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card mb-4 rounded-3 shadow-sm p-1 bg-transparent border-dark">
                            <div className="card-header py-3">
                                <h2 className="text-white my-0 fw-normal">Backend</h2>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mb-4">
                                    <h3 className="fs-4 badge bg-secondary">PHP</h3><br />
                                    <h3 className="fs-4 badge bg-secondary">Laravel</h3><br />
                                    <h3 className="fs-4 badge bg-secondary">NodeJS, ExpressJS</h3><br />
                                    <h3 className="fs-4 badge bg-secondary">MySQL, PostgreSQL, MariaDB</h3>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card mb-4 rounded-3 shadow-sm p-1 bg-transparent border-dark">
                            <div className="card-header py-3">
                                <h2 className="text-white my-0 fw-normal">.NET</h2>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mb-4">
                                    <h3 className="fs-4 badge bg-secondary">C#</h3><br />
                                    <h3 className="fs-4 badge bg-secondary">WPF, WinForms</h3><br />
                                    <h3 className="fs-4 badge bg-secondary">ASP.NET, Razor pages</h3>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="text-white addition-text">Additional technologies and skills</h2>
                    <ul className="ms-5 mt-2 ul-list text-white">
                        <li className="fs-4 badge bg-secondary list-item">Git</li>
                        <li className="list-item fs-4 badge bg-secondary">Quick learning</li>
                        <li className="list-item fs-4 badge bg-secondary">Teamwork</li>
                        <li className="list-item fs-4 badge bg-secondary">English(B2)</li>
                        <li className="list-item fs-4 badge bg-secondary">Ukrainian(Native)</li>
                        <li className="list-item fs-4 badge bg-secondary">Russian(C2)</li>
                        <li className="list-item fs-4 badge bg-secondary">Figma</li>
                    </ul>
                </div>
            </div>

        </>
    )
}
