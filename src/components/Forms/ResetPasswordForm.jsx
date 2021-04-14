import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Input from "../../components/Input/Input";
import BaseButton from '../Buttons/Buttons';
import Alert from 'react-bootstrap/Alert';

function ResetPasswordForm({forgotPassword, resetPasswordConfirm, forgotPasswordMsg, forgotPasswordError}) {
    const [email, setEmail] = useState('');
    const [new_password1, setNewPassword1] = useState('');
    const [new_password2, setNewPassword2] = useState('');
    const [uid, setUid] = useState('');
    const [token, setToken] = useState('');
    const [showForm, setShowForm] = useState(true);

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangeUid = (e) => {
        const uid = e.target.value;
        setUid(uid);
    };

    const onChangeToken = (e) => {
        const token = e.target.value;
        setToken(token);
    };

    const onChangePassword1 = (e) => {
        const new_password1 = e.target.value;
        setNewPassword1(new_password1);
    };

    const onChangePassword2 = (e) => {
        const new_password2 = e.target.value;
        setNewPassword2(new_password2);
    };

    const handleResetSubmit = (e) => {
        e.preventDefault();
        forgotPassword({email});
        setShowForm(!showForm);
    };

    const handleConfirmResetSubmit = (e) => {
        e.preventDefault();
        resetPasswordConfirm({new_password1, new_password2, uid, token});
    }

    return(
        <Row className="justify-content-md-center">
            <Col style={{backgroundColor: 'rgba(0,0,0,.75)', height: '480px', padding: '60px 68px 40px'}}>
                {showForm && <Form onSubmit={handleResetSubmit}>
                    <h1 className="text-white mb-4"><b>Reset Password</b></h1>
                    <Form.Group controlId="formGroupEmail">
                        {/* {forgotPasswordError == null && <Alert variant="success">{forgotPasswordMsg}</Alert>} */}
                        <Input type="email" name="email" value={email} onChange={onChangeEmail} required="required" placeholder="Email" style={{height:'50px', backgroundColor: '#333', border: '1px solid #333', color: 'white'}} />
                    </Form.Group>

                    <BaseButton type="submit" color="btn-danger">Send</BaseButton>
                </Form>}

                {!showForm && <Form onSubmit={handleConfirmResetSubmit}>
                    <h1 className="text-white mb-4"><b>Confirm Reset Password</b></h1>
                    <Form.Group controlId="formGroupEmail">
                        {/* {forgotPasswordError == null && <Alert variant="success">{forgotPasswordMsg}</Alert>} */}
                        <Input type="password" name="new_password1" value={new_password1} onChange={onChangePassword1} required="required" placeholder="New password1" style={{height:'50px', backgroundColor: '#333', border: '1px solid #333', color: 'white', marginBottom: '8px'}} />
                        <Input type="password" name="new_password2" value={new_password2} onChange={onChangePassword2} required="required" placeholder="New password2" style={{height:'50px', backgroundColor: '#333', border: '1px solid #333', color: 'white', marginBottom: '8px'}} />
                        <Input type="text" name="uid" value={uid} onChange={onChangeUid} required="required" placeholder="UID" style={{height:'50px', backgroundColor: '#333', border: '1px solid #333', color: 'white', marginBottom: '8px'}} />
                        <Input type="text" name="token" value={token} onChange={onChangeToken} required="required" placeholder="Token" style={{height:'50px', backgroundColor: '#333', border: '1px solid #333', color: 'white', marginBottom: '8px'}} />
                    </Form.Group>

                    <BaseButton type="submit" color="btn-danger">Change</BaseButton>
                </Form>}
            </Col>
        </Row>
    )
}

export default ResetPasswordForm;