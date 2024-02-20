/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./config";

type PropsType = {
  children: any;
};

export type AuthContextType = {
  loading: boolean;
  user: object | null | any;
  logIn: (email: string, password: string) => any;
  signUp: (email: string, password: string) => any;
  logOut: () => any;
  googleSignIn: () => any;
  setUser: (value: any) => void;
  setLoading: (bool: boolean) => void;
};

export const UserAuthContext = React.createContext<AuthContextType | null>(
  null
);

export default function UserAAuthContextProvider({ children }: PropsType) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser: any) => {
      setLoading(false);
      setUser(currentuser);
    });

    console.log("object");

    return () => {
      unsubscribe();
    };
  }, []);

  function logIn(email: string, password: string) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email: string, password: string) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    setLoading(true);
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  return (
    <UserAuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        logIn,
        signUp,
        logOut,
        googleSignIn,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

export class UserAuthContextProvider extends React.Component<PropsType> {
  state = {
    user: null,
    loading: false,
  };

  logIn = (email: string, password: string) => {
    this.setState({ loading: true });
    return signInWithEmailAndPassword(auth, email, password);
  };

  signUp = (email: string, password: string) => {
    this.setState({ loading: true });
    return createUserWithEmailAndPassword(auth, email, password);
  };

  logOut = () => {
    this.setState({ loading: true });
    return signOut(auth);
  };

  googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    this.setState({ loading: true });
    return signInWithPopup(auth, googleAuthProvider);
  };

  setLoading = (bool: boolean) => {
    this.setState({ loading: bool });
  };

  setUser = (data: object | null) => {
    this.setState({ user: data });
  };

  render(): any {
    return (
      <UserAuthContext.Provider
        value={{
          ...this.state,
          logIn: this.logIn,
          signUp: this.signUp,
          logOut: this.logOut,
          googleSignIn: this.googleSignIn,
          setUser: this.setUser,
          setLoading: this.setLoading,
        }}
      >
        {this.props.children}
      </UserAuthContext.Provider>
    );
  }
}

type ChangeOccurType = {
  children: React.ReactNode;
};

export const UseAuth = () => {
  const values = useContext(UserAuthContext) as AuthContextType;

  return { ...values };
};

export const ChangeOccur = ({ children }: ChangeOccurType) => {
  const { setUser, setLoading } = UseAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setLoading(false);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  });

  return <div className="change">{children}</div>;
};
