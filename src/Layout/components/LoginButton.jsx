import "./LoginButton.css"
import "../style.css"
import Swal from 'sweetalert2'

function alertUser() {
	return Swal({
  title: 'Utilize o acesso:',
  text: `Usuário: 'visitante' e Senha: 'siclope'`,
  icon: "success",
  showCancelButton:true,	
  showConfirmButton: true,
  reverseButtons:true,
  cancelButtonText:'Cancelar',
  confirmButtonText: `<a href="https://frotas-erp.bubbleapps.io/version-test/">Conhecer agora!</a>`,
  customClass: 'sweetalert'
});
}

const LoginButton =() => {
    return (
        <>
		    <button
		    	key={"login"} 
				onClick={alertUser}
		    	className={`font-poppins font-normal cursor-pointer text-[0.9rem] text-white mx-6 login type1`}
		    >
		    </button>
        </>
    )
}

export default LoginButton;