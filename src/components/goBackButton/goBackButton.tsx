import { useHistory } from 'react-router-dom';
import './goBackButton.scss'

export const GoBackButton = () => {

    const history = useHistory();
    function goBack(){
        history.goBack();
    }

    return(
        <div className="goBackButton">
            <h1 onClick={goBack}>
            <svg viewBox="0 0 24 24" width="30" height="30" stroke="cyan" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            <span>Go back</span>
            </h1>
        </div>
    )
}