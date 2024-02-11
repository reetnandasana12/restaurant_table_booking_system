import React from 'react';
import { FcGoogle } from 'react-icons/fc';
// import useAuth from '../../hooks/useAuth';

const GoogleSignIn = () => {
    // const { signInWithGoogle} = null;
    const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
    return (
        <>
            {/* //google signin g */}
            <div className="border-t border-gray-200 mt-6">
                <p className="text-center text-gray-400 py-4">OR </p>
                <div className="flex items-center space-x-3 justify-center border border-gray-300 rounded-lg w-full py-3 cursor-pointer hover:bg-gray-100" onClick={googleAuth}>
                    <FcGoogle className="w-6 h-6" />
                    <span className="poppins">Sign In with Google</span>
                </div>
            </div>
        </>
    )
}

export default GoogleSignIn
