export default function Loading() {
	return (
		<main
			className="relative flex min-h-[calc(100vh-81px)] flex-1 items-center justify-center overflow-hidden bg-slate-950 px-6 text-white"
			aria-live="polite"
			aria-busy="true"
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.14),transparent_42%)]" />

			<div className="relative flex flex-col items-center gap-6 text-center">
				<div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-blue-500/20 bg-slate-900/70 shadow-[0_0_45px_rgba(59,130,246,0.16)]">
					<div className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500" />
					<span className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />
				</div>

				<div>
					  <p className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
						My Profile
					</p>
					<p className="mt-2 text-sm text-slate-400">Loading your experience...</p>
				</div>

				<div className="h-1 w-36 overflow-hidden rounded-full bg-slate-800">
					  <div className="h-full w-1/2 animate-[loading_1.4s_ease-in-out_infinite] rounded-full bg-linear-to-r from-blue-500 to-purple-500" />
				</div>
			</div>
		</main>
	);
}
