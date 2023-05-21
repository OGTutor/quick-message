'use client';

import { FC, useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Input from '@/components/inputs/Input';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm: FC = () => {
	const [variant, setVariant] = useState<Variant>('LOGIN');
	const [isLoading, setIsLoading] = useState(false);

	const toggleVariant = useCallback(() => {
		if (variant === 'LOGIN') {
			setVariant('REGISTER');
		} else {
			setVariant('LOGIN');
		}
	}, [variant]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		if (variant === 'REGISTER') {
			// Axios Register
		}

		if (variant === 'LOGIN') {
			// NextAuth SignIn
		}
	};

	const socialAction = (action: string) => {
		setIsLoading(true);

		// NextAuth Social Sign In
	};

	return (
		<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
			<div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
				<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
					{variant === 'REGISTER' && (
						<Input
							id="name"
							label="Name"
							register={register}
							errors={errors}
						/>
					)}
					<Input
						id="email"
						label="Email"
						type="email"
						register={register}
						errors={errors}
					/>
					<Input
						id="password"
						label="Password"
						type="password"
						register={register}
						errors={errors}
					/>
					<div>
						<Button disabled={isLoading} fullWidth type="submit">
							{variant === 'LOGIN' ? 'Sign in' : 'Register'}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AuthForm;
