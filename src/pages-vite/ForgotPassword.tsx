import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Mail,
    ArrowRight,
    ArrowLeft,
    KeyRound,
    CheckCircle,
    Shield,
    Lock,
    Eye,
    EyeOff,
    RefreshCw
} from "lucide-react";

const ForgotPassword = () => {
    const [step, setStep] = useState<'email' | 'verify' | 'reset' | 'success'>('email');
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [countdown, setCountdown] = useState(0);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStep('verify');
            startCountdown();
        }, 1500);
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep('reset');
        }, 1500);
    };

    const handleResetSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep('success');
        }, 1500);
    };

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto focus next input
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    };

    const startCountdown = () => {
        setCountdown(60);
        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const resendOtp = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            startCountdown();
        }, 1000);
    };

    const passwordStrength = () => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    };

    const getStrengthText = () => {
        const strength = passwordStrength();
        if (strength === 0) return { text: "", color: "" };
        if (strength <= 2) return { text: "Yếu", color: "bg-red-500" };
        if (strength <= 3) return { text: "Trung bình", color: "bg-yellow-500" };
        if (strength <= 4) return { text: "Mạnh", color: "bg-green-500" };
        return { text: "Rất mạnh", color: "bg-emerald-500" };
    };

    const renderStep = () => {
        switch (step) {
            case 'email':
                return (
                    <>
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c3e8ff] rounded-full mb-4">
                                <KeyRound className="w-8 h-8 text-[#0f426c]" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#0f426c]">Quên mật khẩu?</h2>
                            <p className="text-[#507588] mt-2">
                                Đừng lo, chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu cho bạn
                            </p>
                        </div>

                        <form onSubmit={handleEmailSubmit} className="space-y-5">
                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-[#0f426c] font-medium">
                                    Email đăng ký
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8fc0db]" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="email@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10 h-12 border-[#a7d5ec] focus:border-[#0f426c] focus:ring-[#0f426c] bg-white"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="hero"
                                size="lg"
                                className="w-full h-12 text-base"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Đang gửi...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <span>Gửi mã xác nhận</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                )}
                            </Button>
                        </form>

                        {/* Back to Login */}
                        <Link
                            to="/login"
                            className="flex items-center justify-center gap-2 mt-6 text-[#507588] hover:text-[#0f426c] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Quay lại đăng nhập</span>
                        </Link>
                    </>
                );

            case 'verify':
                return (
                    <>
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c3e8ff] rounded-full mb-4">
                                <Shield className="w-8 h-8 text-[#0f426c]" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#0f426c]">Xác nhận email</h2>
                            <p className="text-[#507588] mt-2">
                                Chúng tôi đã gửi mã 6 số đến<br />
                                <span className="font-semibold text-[#0f426c]">{email}</span>
                            </p>
                        </div>

                        <form onSubmit={handleOtpSubmit} className="space-y-6">
                            {/* OTP Inputs */}
                            <div className="flex justify-center gap-3">
                                {otp.map((digit, index) => (
                                    <Input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                        className="w-12 h-14 text-center text-xl font-semibold border-[#a7d5ec] focus:border-[#0f426c] focus:ring-[#0f426c] bg-white"
                                    />
                                ))}
                            </div>

                            {/* Resend Code */}
                            <div className="text-center">
                                {countdown > 0 ? (
                                    <p className="text-[#507588]">
                                        Gửi lại mã sau <span className="font-semibold text-[#0f426c]">{countdown}s</span>
                                    </p>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={resendOtp}
                                        className="flex items-center justify-center gap-2 text-[#3087fe] hover:text-[#0f426c] font-medium transition-colors mx-auto"
                                        disabled={isLoading}
                                    >
                                        <RefreshCw className="w-4 h-4" />
                                        Gửi lại mã
                                    </button>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="hero"
                                size="lg"
                                className="w-full h-12 text-base"
                                disabled={isLoading || otp.some(d => !d)}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Đang xác nhận...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <span>Xác nhận</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                )}
                            </Button>
                        </form>

                        {/* Change Email */}
                        <button
                            onClick={() => setStep('email')}
                            className="flex items-center justify-center gap-2 mt-6 text-[#507588] hover:text-[#0f426c] transition-colors w-full"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Thay đổi email</span>
                        </button>
                    </>
                );

            case 'reset':
                return (
                    <>
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c3e8ff] rounded-full mb-4">
                                <Lock className="w-8 h-8 text-[#0f426c]" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#0f426c]">Đặt mật khẩu mới</h2>
                            <p className="text-[#507588] mt-2">
                                Mật khẩu mới phải khác với mật khẩu đã sử dụng trước đó
                            </p>
                        </div>

                        <form onSubmit={handleResetSubmit} className="space-y-5">
                            {/* New Password */}
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-[#0f426c] font-medium">
                                    Mật khẩu mới
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8fc0db]" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Tối thiểu 8 ký tự"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-10 pr-10 h-12 border-[#a7d5ec] focus:border-[#0f426c] focus:ring-[#0f426c] bg-white"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8fc0db] hover:text-[#0f426c] transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {/* Password Strength Indicator */}
                                {password && (
                                    <div className="space-y-1">
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <div
                                                    key={i}
                                                    className={`h-1 flex-1 rounded-full transition-all ${i <= passwordStrength() ? getStrengthText().color : 'bg-gray-200'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-xs text-[#507588]">
                                            Độ mạnh: <span className="font-medium">{getStrengthText().text}</span>
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword" className="text-[#0f426c] font-medium">
                                    Xác nhận mật khẩu
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8fc0db]" />
                                    <Input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Nhập lại mật khẩu"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className={`pl-10 pr-10 h-12 border-[#a7d5ec] focus:border-[#0f426c] focus:ring-[#0f426c] bg-white ${confirmPassword && password !== confirmPassword
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                            : ''
                                            }`}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8fc0db] hover:text-[#0f426c] transition-colors"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {confirmPassword && password !== confirmPassword && (
                                    <p className="text-xs text-red-500">Mật khẩu không khớp</p>
                                )}
                            </div>

                            {/* Password Requirements */}
                            <div className="bg-[#f4fbff] rounded-lg p-4 space-y-2">
                                <p className="text-sm font-medium text-[#0f426c]">Mật khẩu phải có:</p>
                                <ul className="space-y-1.5">
                                    {[
                                        { check: password.length >= 8, text: 'Ít nhất 8 ký tự' },
                                        { check: /[A-Z]/.test(password), text: 'Ít nhất 1 chữ hoa' },
                                        { check: /[a-z]/.test(password), text: 'Ít nhất 1 chữ thường' },
                                        { check: /[0-9]/.test(password), text: 'Ít nhất 1 số' },
                                        { check: /[^A-Za-z0-9]/.test(password), text: 'Ít nhất 1 ký tự đặc biệt' },
                                    ].map((req, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <CheckCircle className={`w-4 h-4 ${req.check ? 'text-green-500' : 'text-gray-300'}`} />
                                            <span className={req.check ? 'text-green-600' : 'text-[#507588]'}>{req.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="hero"
                                size="lg"
                                className="w-full h-12 text-base"
                                disabled={isLoading || password !== confirmPassword || passwordStrength() < 3}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Đang xử lý...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <span>Đặt lại mật khẩu</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                )}
                            </Button>
                        </form>
                    </>
                );

            case 'success':
                return (
                    <div className="text-center py-8">
                        {/* Success Icon */}
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>

                        <h2 className="text-2xl font-bold text-[#0f426c] mb-3">
                            Đặt lại mật khẩu thành công!
                        </h2>
                        <p className="text-[#507588] mb-8">
                            Mật khẩu của bạn đã được cập nhật.<br />
                            Hãy đăng nhập với mật khẩu mới.
                        </p>

                        <Link to="/login">
                            <Button
                                variant="hero"
                                size="lg"
                                className="w-full h-12 text-base"
                            >
                                <span>Đăng nhập ngay</span>
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>

                        {/* Security Tips */}
                        <div className="mt-8 p-4 bg-[#f4fbff] rounded-lg text-left">
                            <p className="text-sm font-medium text-[#0f426c] mb-2">💡 Mẹo bảo mật:</p>
                            <ul className="text-sm text-[#507588] space-y-1">
                                <li>• Không chia sẻ mật khẩu với bất kỳ ai</li>
                                <li>• Sử dụng mật khẩu khác nhau cho các tài khoản</li>
                                <li>• Bật xác thực 2 lớp để tăng cường bảo mật</li>
                            </ul>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0f426c] via-[#1a5a8a] to-[#3087fe] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#3087fe] rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#8fc0db] rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center px-16 py-12 text-white">
                    {/* Logo */}
                    <div className="mb-12">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-[#0f426c] font-bold text-xl">S</span>
                            </div>
                            <span className="text-3xl font-bold">SOF.COM.VN</span>
                        </Link>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold mb-4 leading-tight">
                                Bảo mật là<br />ưu tiên hàng đầu
                            </h1>
                            <p className="text-xl text-white/80 leading-relaxed">
                                Hệ thống bảo mật đa lớp giúp bảo vệ tài khoản và dữ liệu của bạn
                            </p>
                        </div>

                        {/* Security Features */}
                        <div className="space-y-4 mt-12">
                            {[
                                "Mã hóa dữ liệu 256-bit AES",
                                "Xác thực hai yếu tố (2FA)",
                                "Giám sát đăng nhập bất thường",
                                "Tuân thủ tiêu chuẩn ISO 27001"
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 text-white/90"
                                >
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <span className="text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 right-0 opacity-20">
                        <Shield className="w-64 h-64 text-white" />
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-[#f4fbff] to-[#d2eaf7]">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden mb-8 text-center">
                        <Link to="/" className="inline-flex items-center gap-2">
                            <div className="w-10 h-10 bg-[#0f426c] rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="text-2xl font-bold text-[#0f426c]">SOF.COM.VN</span>
                        </Link>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#a7d5ec]/50">
                        {/* Progress Indicator - Only show for multi-step */}
                        {step !== 'success' && (
                            <div className="flex items-center justify-center mb-6">
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full ${step === 'email' ? 'bg-[#0f426c]' : 'bg-[#c3e8ff]'}`} />
                                    <div className={`w-12 h-0.5 ${step !== 'email' ? 'bg-[#0f426c]' : 'bg-[#c3e8ff]'}`} />
                                    <div className={`w-3 h-3 rounded-full ${step === 'verify' ? 'bg-[#0f426c]' : 'bg-[#c3e8ff]'}`} />
                                    <div className={`w-12 h-0.5 ${step === 'reset' ? 'bg-[#0f426c]' : 'bg-[#c3e8ff]'}`} />
                                    <div className={`w-3 h-3 rounded-full ${step === 'reset' ? 'bg-[#0f426c]' : 'bg-[#c3e8ff]'}`} />
                                </div>
                            </div>
                        )}

                        {renderStep()}
                    </div>

                    {/* Footer */}
                    {step !== 'success' && (
                        <p className="text-center mt-6 text-sm text-[#507588]">
                            Cần hỗ trợ?{" "}
                            <Link to="/contact" className="text-[#3087fe] hover:underline">
                                Liên hệ với chúng tôi
                            </Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
