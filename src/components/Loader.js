import './Loader.css';

export default function LoaderHome() {
    return (
        <div className='loader'><br />
            <h1 className="name-loading"> Loading... </h1><br />
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
};