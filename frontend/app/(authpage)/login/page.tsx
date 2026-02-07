"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";


const LoginSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const router = useRouter();

  
  const handleLogin = async (
    values: { username: string; password: string },
    setSubmitting: (v: boolean) => void
  ) => {
    try {
      const { data } = await axios.post(
        "https://fakestoreapi.com/auth/login",
        values
      );

      localStorage.setItem("token", data.token);
      toast.success("Login successful!");
      router.push("/");
    } catch (error: any) {
      toast.error(error.response?.data || "Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Kinmel</h1>
          <p className="text-sm text-gray-500 mt-1">
            Shop Smart, Shop Fast
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Login to your account
        </h2>

        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) =>
            handleLogin(values, setSubmitting)
          }
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <Field
                  name="username"
                  type="text"
                  placeholder="username"
                  className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-70"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>        
      </div>
    </div>
  );
};

export default LoginPage;
