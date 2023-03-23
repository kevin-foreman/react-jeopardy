import React  from "react";
import PropTypes from 'prop-types';

const Response = (props) => {

        // this function should fire when the user fills the response and hits 'enter'
        // Is the user response correct?
        // yes/no? What should happen

    return (
        <div id={"response"} data-testid="response">
            <input
                type="text"
                placeholder="Put Your Answer Here"
                onChange={e => props.recordResponse(e.target.value)}
                onKeyDown={e => e.key==='Enter' ? props.submitResponse(e) : null}
            />
        </div>
    );
};

Response.propTypes = {
    recordResponse: PropTypes.func,
    submitResponse: PropTypes.func,
}

export default Response;