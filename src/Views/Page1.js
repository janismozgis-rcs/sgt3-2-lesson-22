import TextWrapper from '../Components/TextWrapper';

function Page1() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">This is page 1</div>
            </div>
            <div className="row">
                <div className="col">
                    <TextWrapper />
                </div>
            </div>
        </div>
    )
}

export default Page1;