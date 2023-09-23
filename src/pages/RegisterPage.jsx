import { Link } from 'react-router-dom'

export default function RegisterPage() {
	return (
		<div className='mt-4 grow flex items-center justify-around'>
			<div className='mb-64'>
				<h1 className='text-l font-bold text-center mb-20'>
					Log in or sign up
				</h1>
				<h2 className='text-2xl font-bold'>Welcome to Airbnb</h2>
				<form className='max-w-md mx-auto'>
					<input type='text' placeholder='John Doe' />
					<input type='email' placeholder='Your email' />
					<input type='password' placeholder='Your password' />
					<button className='primary'>Login</button>
					<div className='text-center py-2 text-gray-500'>
						Already a member?
						<Link className='underline text-black' to={'/Login'}>
							Login
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}
