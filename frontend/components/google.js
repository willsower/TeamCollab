import Image from "next/image";

import { GoogleLogin } from "react-google-login";

import styles from "../styles/SignUpLogin.module.css";

function Google({ type }) {
  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;
    dispatch(
      createProfile({
        name: result?.name,
        email: result?.email,
        userId: result?.googleId,
      })
    );

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      window.location.href = "/home";
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try again later");
  };

  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      render={(renderProps) => (
        <button
          className={`${styles.form_item}`}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <div className="inline-block w-6 h-6 relative align-middle">
            <Image src="/icon/google.svg" layout="fill" objectFit="contain" />
          </div>
          <p className="ml-2 inline-block align-middle font-semibold">
            {type} with Google
          </p>
        </button>
      )}
      onSuccess={googleSuccess}
      onFailure={googleError}
      cookiePolicy="single_host_origin"
    />
  );
}

export default Google;
