'use client';
import React from 'react';
import { Controller } from 'react-hook-form';
import { LuAlertCircle } from 'react-icons/lu';
import { cn } from '@/utils';

const ProductTextFormInput = ({
	control,
	id,
	name,
	label,
	className,
	labelClassName,
	containerClassName,
	noValidate,
	fullWidth,
	startInnerIcon,
	endButtonIcon,
	onChange,
	defaultValue,
	value,
	type, // Thêm type để kiểm tra
	...other
}) => {
	return (
		<Controller
			control={control}
			defaultValue={defaultValue}
			render={({ field, fieldState }) => (
				<div
					className={cn(containerClassName, 'relative', {
						'max-w-full': fullWidth,
					})}>
					{label && (
						<label
							className={cn('mb-2 block text-sm font-medium text-default-900', labelClassName)}
							htmlFor={name}>
							{label}
						</label>
					)}
					<div className={cn('relative', fullWidth && 'max-w-full')}>
						<input
							{...other}
							{...field}
							id={id ?? name}
							type={type} // Đảm bảo rằng type được truyền vào input
							min={type === 'number' ? 1 : undefined} // Thiết lập min nếu type là number
							className={cn(
								'form-input focus:border-primary rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50',
								{ 'ps-10': startInnerIcon },
								{ 'pe-14': endButtonIcon },
								{ 'w-full': fullWidth },
								{
									'border-red-500 focus:border-red-500': !noValidate && fieldState.error?.message,
								},
								className
							)}
							onChange={(e) => {
								field.onChange(e); // Propagate onChange event to react-hook-form's Controller
								if (onChange) onChange(e); // Call onChange prop if provided
							}}
							onBlur={(e) => {
								const value = e.target.value;
								if (type === 'number' && (value === '' || value < 1)) {
									const newValue = value === '' ? '' : 1;
									field.onChange(newValue);
									if (onChange) onChange({ ...e, target: { ...e.target, value: newValue } });
								}
							}}
						/>

						{startInnerIcon && (
							<span className='absolute start-3 top-1/2 -translate-y-1/2'>{startInnerIcon}</span>
						)}

						{endButtonIcon && (
							<button
								type='button' // Use type="button" for non-submit buttons
								className='absolute end-0 top-1/2 inline-flex h-[2.875rem] w-[2.875rem] flex-shrink-0 -translate-y-1/2 items-center justify-center rounded-e-md border border-transparent bg-primary text-sm font-semibold text-white transition-all hover:bg-primary-600'>
								{endButtonIcon}
							</button>
						)}

						{!noValidate && fieldState.error?.message && (
							<div
								className={cn(
									'pointer-events-none absolute inset-y-0 flex items-center',
									endButtonIcon ? 'end-14' : 'end-4'
								)}>
								<LuAlertCircle size={20} className='text-red-500' />
							</div>
						)}
					</div>
					{!noValidate && fieldState.error?.message && (
						<p className='mt-2 text-xs text-red-600'>{fieldState.error.message}</p>
					)}
				</div>
			)}
			name={name}
		/>
	);
};

export default ProductTextFormInput;
