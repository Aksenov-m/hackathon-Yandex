import {h} from 'preact';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__modal">
                <button onClick={props.onClose} type="button" aria-label="закрыть"
                        className="popup__close blackout" />
                <form onSubmit={props.onSubmit} name={props.name}
                      className={`popup__form popup__form_type${props.name}`}>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;
