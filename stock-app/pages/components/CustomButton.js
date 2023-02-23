import { Button } from 'react-bootstrap';

function CustomButton(props){
    return(
        <>
            <style type='text/css'>
                {`
                    .btn-custom{
                        background-color: #F2705B;   
                        color: white;
                        border: none;
                        border-radius: 20px;
                        padding: 6px 30px
                    
                    }
                    .btn-custom:hover{
                        background-color:#3E5B62;
                        color:white;
                        border: none
                    }

                    .btn-custom:focus:active{
                        background-colour: white;
                        color: #F2705B;  
                        border: 1px solid;
                        border-color: #F2705B;            
                    }
                `}
            </style>

            <Button variant='custom' >
                <>{props.button}</>
            </Button>
        </>
    )
}

export default CustomButton;