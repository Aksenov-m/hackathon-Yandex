import {h} from 'preact';

function PopupWithForm(props) {

    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`} onClick={props.onClose}>
            <div className="popup__modal" onClick={props.stopPropagation}>
                <button onClick={props.onClose} type="button" aria-label="закрыть"
                        className="popup__close blackout" />
                {props.children}
            </div>
        </div>
    )
}

export default PopupWithForm;
