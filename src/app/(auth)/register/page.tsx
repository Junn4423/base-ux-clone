"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { authService } from "@/services/authService";
import { useAuth } from "@/components/providers/AuthProvider";
import { getGoogleAuthCode } from "@/lib/googleAuth";
import { getFacebookAuthToken } from "@/lib/facebookAuth";
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    User,
    Phone,
    Building2,
    ArrowRight,
    Chrome,
    Facebook,
    Apple,
    CheckCircle2,
    Sparkles,
    Shield,
    Zap
} from "lucide-react";

export default function RegisterPage() {
    const router = useRouter();
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        username: "",
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
        agreeMarketing: false,
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (currentStep === 1) {
            setCurrentStep(2);
            return;
        }
        setIsLoading(true);

        try {
            // Note: API 'username' mapped from 'fullName' or 'email' depending on requirement. 
            // Based on user request data example: username: "test_user_01", email: "test.user@example.com"
            // Since we don't have separate username field, let's use email prefix or generate one, OR API might accept email as username.
            // Requirement says request body has 'username'. I'll assume we use email as username for now or ask user to add username field.
            // But looking at previous request body example: "username": "test_user_01", "email": "..."
            // I will use email as username for simplicity unless specified otherwise.

            const payload = {
                username: formData.username,
                password: formData.password,
                email: formData.email,
                phone: formData.phone,
                companyName: formData.companyName || "N/A"
            };

            const response = await authService.register(payload);

            if (response.success) {
                toast.success(response.message || "Đăng ký thành công!");

                // Auto login or redirect to login? 
                // User request said: "sau khi đăng nhập thì tên người dùng sẽ thay thế..."
                // Typical flow: Register -> Auto Login OR Redirect to Login.
                // Response data contains token, so we can Auto Login.

                login({
                    username: response.data.username,
                    name: response.data.name,
                    token: response.data.token,
                    role: response.data.role,
                    email: response.data.email,
                });

                router.push("/");
            } else {
                toast.error(response.message || "Đăng ký thất bại");
            }
        } catch (error) {
            console.error(error);
            toast.error("Có lỗi xảy ra, vui lòng thử lại sau.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        try {
            const code = await getGoogleAuthCode();
            const response = await authService.loginWithGoogle(code);

            if (response.success) {
                toast.success(response.message || "Đăng nhập Google thành công!");

                login({
                    username: response.data.username,
                    name: response.data.name,
                    token: response.data.token,
                    role: response.data.role,
                    email: response.data.email,
                });

                router.push("/");
            } else {
                toast.error(response.message || "Đăng nhập Google thất bại");
            }
        } catch (error) {
            console.error(error);
            toast.error("Đăng nhập Google thất bại, vui lòng thử lại");
        } finally {
            setIsLoading(false);
        }
    };

    const handleFacebookLogin = async () => {
        setIsLoading(true);
        try {
            const { accessToken } = await getFacebookAuthToken();
            const response = await authService.loginWithFacebook(accessToken);

            if (response.success) {
                toast.success(response.message || "Đăng nhập Facebook thành công!");

                login({
                    username: response.data.username,
                    name: response.data.name,
                    token: response.data.token,
                    role: response.data.role,
                    email: response.data.email,
                });

                router.push("/");
            } else {
                toast.error(response.message || "Đăng nhập Facebook thất bại");
            }
        } catch (error) {
            console.error(error);
            toast.error("Đăng nhập Facebook thất bại, vui lòng thử lại");
        } finally {
            setIsLoading(false);
        }
    };

    const passwordStrength = () => {
        const password = formData.password;
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

    const benefits = [
        {
            icon: Shield,
            title: "Bảo mật tối đa",
            description: "Dữ liệu được mã hóa 256-bit"
        },
        {
            icon: Zap,
            title: "Triển khai nhanh",
            description: "Hoàn thành trong 24 giờ"
        },
        {
            icon: CheckCircle2,
            title: "Dùng thử miễn phí",
            description: "30 ngày trải nghiệm đầy đủ"
        }
    ];

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
                        <Link href="/" className="flex items-center gap-3">
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
                                Bắt đầu hành trình<br />chuyển đổi số
                            </h1>
                            <p className="text-xl text-white/80 leading-relaxed">
                                Tạo tài khoản miễn phí và trải nghiệm giải pháp quản trị doanh nghiệp hàng đầu Việt Nam
                            </p>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-6 mt-12">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                                        <benefit.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{benefit.title}</h3>
                                        <p className="text-white/70">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-12 pt-8 border-t border-white/20">
                            <p className="text-white/70 text-sm mb-4">Được tin dùng bởi hơn 5000+ doanh nghiệp</p>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-sm font-medium"
                                        >
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-white/80">+4995 khác</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Register Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-[#f4fbff] to-[#d2eaf7] overflow-y-auto">
                <div className="w-full max-w-md my-8">
                    {/* Mobile Logo */}
                    <div className="lg:hidden mb-8 text-center">
                        <Link href="/" className="inline-flex items-center gap-2">
                            <div className="w-10 h-10 bg-[#0f426c] rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="text-2xl font-bold text-[#0f426c]">SOF.COM.VN</span>
                        </Link>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#a7d5ec]/50">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c3e8ff] rounded-full mb-4">
                                <Sparkles className="w-8 h-8 text-[#0f426c]" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#0f426c]">Tạo tài khoản</h2>
                            <p className="text-[#507588] mt-2">
                                Trải nghiệm miễn phí 30 ngày
                            </p>
                        </div>

                        {/* Progress Steps */}
                        <div className="flex items-center justify-center mb-8">
                            <div className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${currentStep >= 1 ? 'bg-[#0f426c] text-white' : 'bg-[#c3e8ff] text-[#507588]'
                                    }`}>
                                    1
                                </div>
                                <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-[#0f426c]' : 'bg-[#c3e8ff]'}`} />
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${currentStep >= 2 ? 'bg-[#0f426c] text-white' : 'bg-[#c3e8ff] text-[#507588]'
                                    }`}>
                                    2
                                </div>
                            </div>
                        </div>

                        {/* Social Login - Only on Step 1 */}
                        {currentStep === 1 && (
                            <>
                                <div className="space-y-3 mb-6">
                                    <Button
                                        variant="outline"
                                        className="w-full h-12 border-[#a7d5ec] hover:bg-[#f4fbff] hover:border-[#0f426c] transition-all duration-300 relative"
                                        onClick={handleGoogleLogin}
                                        disabled={isLoading}
                                    >
                                        <Chrome className="w-5 h-5 text-[#4285F4] absolute left-4" />
                                        <span className="text-[#0f426c]">Đăng ký với Google</span>
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="w-full h-12 border-[#a7d5ec] hover:bg-[#f4fbff] hover:border-[#0f426c] transition-all duration-300 relative"
                                        onClick={handleFacebookLogin}
                                        disabled={isLoading}
                                    >
                                        <Facebook className="w-5 h-5 text-[#1877F2] absolute left-4" />
                                        <span className="text-[#0f426c]">Đăng ký với Facebook</span>
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="w-full h-12 border-[#a7d5ec] hover:bg-[#f4fbff] hover:border-[#0f426c] transition-all duration-300 relative"
                                    >
                                        <Apple className="w-5 h-5 text-[#000000] absolute left-4" />
                                        <span className="text-[#0f426c]">Đăng ký với Apple</span>
                                    </Button>
                                </div>

                                {/* Divider */}
                                <div className="relative my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-[#a7d5ec]"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-white text-[#507588]">hoặc đăng ký với email</span>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {currentStep === 1 ? (
                                <>
                                    {/* Username */}
                                    <div className="space-y-2">
                                        <Label htmlFor="username" className="text-[#0f426c] font-medium">
                                            Tên đăng nhập <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8fc0db]" />
                                            <Input
                                                id="username"
                                                name="username"
                                                type="text"
                                                placeholder="nhập tên đăng nhập"
                                                value={formData.username}
                                                onChange={handleInputChange}
                                                className="pl-10 h-12 border-[#a7d5ec] focus:border-[#0f426c] focus:ring-[#0f426c] bg-white"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName" className="text-[#0f426c] font-medium">
                                            Họ và tên <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative">
                                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center text-[#8fc0db]">
                                                {/* Use a different icon for Full Name since User is used for Username, effectively User icon is generic enough but let's see imports */}
                                                <User className="w-5 h-5" />
                                            </div>
                                            <Input
                                                id="fullName"
                                                name="fullName"
                                                type="text"
                                                placeholder="Nguyễn Văn A"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className="pl-10 h-12 border-[#a7d5ec] focus:border-[#0f426c] focus:ring-[#0f426c] bg-white"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-[#0f426c] font-medium">
                                            Email <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8fc0db]" />
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="email@company.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="pl-10 h-12 border-[#a7d5ec] focus:border-[#0f426c] focus:ring-[#0f426c] bg-white"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-[#0f426c] font-medium">
                                            Số điện thoại <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8fc0db]" />
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="0123 456 789"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="pl-10 h-12 border-[#a7d5ec] focus:border-[#0f426c] focus:ring-[#0f426c] bg-white"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Company Name */}
                                    <div className="space-y-2">
                                        <Label htmlFor="companyName" className="text-[#0f426c] font-medium">
                                            Tên công ty
                                        </Label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8fc0db]" />
                                            <Input
                                                id="companyName"
                                                name="companyName"
                                                type="text"
                                                placeholder="Công ty TNHH ABC"
                                                value={formData.companyName}
                                                onChange={handleInputChange}
                                                className="pl-10 h-12 border-[#a7d5ec] focus:border-[#0f426c] focus:ring-[#0f426c] bg-white"
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Password */}
                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-[#0f426c] font-medium">
                                            Mật khẩu <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8fc0db]" />
                                            <Input
                                                id="password"
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Tối thiểu 8 ký tự"
                                                value={formData.password}
                                                onChange={handleInputChange}
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
                                        {formData.password && (
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
                                            Xác nhận mật khẩu <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8fc0db]" />
                                            <Input
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="Nhập lại mật khẩu"
                                                value={formData.confirmPassword}
                                                onChange={handleInputChange}
                                                className={`pl-10 pr-10 h-12 border-[#a7d5ec] focus:border-[#0f426c] focus:ring-[#0f426c] bg-white ${formData.confirmPassword && formData.password !== formData.confirmPassword
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
                                        {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                                            <p className="text-xs text-red-500">Mật khẩu không khớp</p>
                                        )}
                                    </div>

                                    {/* Terms Agreement */}
                                    <div className="space-y-3 pt-2">
                                        <div className="flex items-start space-x-2">
                                            <Checkbox
                                                id="agreeTerms"
                                                checked={formData.agreeTerms}
                                                onCheckedChange={(checked: boolean) =>
                                                    setFormData((prev) => ({ ...prev, agreeTerms: checked }))
                                                }
                                                className="mt-1 border-[#a7d5ec] data-[state=checked]:bg-[#0f426c] data-[state=checked]:border-[#0f426c]"
                                            />
                                            <Label htmlFor="agreeTerms" className="text-sm text-[#507588] cursor-pointer leading-relaxed">
                                                Tôi đồng ý với{" "}
                                                <Link href="/payment-terms" className="text-[#3087fe] hover:underline">
                                                    Điều khoản dịch vụ
                                                </Link>{" "}
                                                và{" "}
                                                <Link href="/warranty-policy" className="text-[#3087fe] hover:underline">
                                                    Chính sách bảo mật
                                                </Link>
                                                {" "}<span className="text-red-500">*</span>
                                            </Label>
                                        </div>

                                        <div className="flex items-start space-x-2">
                                            <Checkbox
                                                id="agreeMarketing"
                                                checked={formData.agreeMarketing}
                                                onCheckedChange={(checked: boolean) =>
                                                    setFormData((prev) => ({ ...prev, agreeMarketing: checked }))
                                                }
                                                className="mt-1 border-[#a7d5ec] data-[state=checked]:bg-[#0f426c] data-[state=checked]:border-[#0f426c]"
                                            />
                                            <Label htmlFor="agreeMarketing" className="text-sm text-[#507588] cursor-pointer leading-relaxed">
                                                Tôi muốn nhận thông tin khuyến mãi và cập nhật sản phẩm từ SOF.COM.VN
                                            </Label>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex gap-3 pt-2">
                                {currentStep === 2 && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="lg"
                                        className="flex-1 h-12 text-base border-[#a7d5ec] text-[#0f426c] hover:bg-[#f4fbff]"
                                        onClick={() => setCurrentStep(1)}
                                    >
                                        Quay lại
                                    </Button>
                                )}
                                <Button
                                    type="submit"
                                    variant="hero"
                                    size="lg"
                                    className="flex-1 h-12 text-base"
                                    disabled={isLoading || (currentStep === 2 && (!formData.agreeTerms || formData.password !== formData.confirmPassword))}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Đang xử lý...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <span>{currentStep === 1 ? 'Tiếp tục' : 'Hoàn tất đăng ký'}</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    )}
                                </Button>
                            </div>
                        </form>

                        {/* Login Link */}
                        <p className="text-center mt-6 text-[#507588]">
                            Đã có tài khoản?{" "}
                            <Link
                                href="/login"
                                className="text-[#3087fe] hover:text-[#0f426c] font-semibold transition-colors"
                            >
                                Đăng nhập
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
