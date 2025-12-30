import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    ArrowRight,
    Chrome,
    Facebook,
    Apple,
    Shield,
    Sparkles,
    CheckCircle2
} from "lucide-react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            console.log("Login data:", formData);
        }, 1500);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const features = [
        "Quản lý doanh nghiệp thông minh",
        "Tích hợp đa nền tảng",
        "Bảo mật tiên tiến",
        "Hỗ trợ 24/7"
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
                                Chào mừng trở lại!
                            </h1>
                            <p className="text-xl text-white/80 leading-relaxed">
                                Đăng nhập để tiếp tục quản lý doanh nghiệp của bạn với SOF ERP
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-4 mt-12">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 text-white/90"
                                >
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                            <div>
                                <div className="text-3xl font-bold">5000+</div>
                                <div className="text-white/70 text-sm">Doanh nghiệp</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">99.9%</div>
                                <div className="text-white/70 text-sm">Uptime</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">24/7</div>
                                <div className="text-white/70 text-sm">Hỗ trợ</div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 right-0 opacity-20">
                        <Shield className="w-64 h-64 text-white" />
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
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
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c3e8ff] rounded-full mb-4">
                                <Sparkles className="w-8 h-8 text-[#0f426c]" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#0f426c]">Đăng nhập</h2>
                            <p className="text-[#507588] mt-2">
                                Nhập thông tin để truy cập tài khoản
                            </p>
                        </div>

                        {/* Social Login */}
                        <div className="space-y-3 mb-6">
                            <Button
                                variant="outline"
                                className="w-full h-12 border-[#a7d5ec] hover:bg-[#f4fbff] hover:border-[#0f426c] transition-all duration-300"
                            >
                                <Chrome className="w-5 h-5 text-[#4285F4] mr-3" />
                                <span className="text-[#0f426c]">Tiếp tục với Google</span>
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full h-12 border-[#a7d5ec] hover:bg-[#f4fbff] hover:border-[#0f426c] transition-all duration-300"
                            >
                                <Facebook className="w-5 h-5 text-[#1877F2] mr-3" />
                                <span className="text-[#0f426c]">Tiếp tục với Facebook</span>
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full h-12 border-[#a7d5ec] hover:bg-[#f4fbff] hover:border-[#0f426c] transition-all duration-300"
                            >
                                <Apple className="w-5 h-5 text-[#000000] mr-3" />
                                <span className="text-[#0f426c]">Tiếp tục với Apple</span>
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#a7d5ec]"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-[#507588]">hoặc đăng nhập với email</span>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-[#0f426c] font-medium">
                                    Email
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

                            {/* Password */}
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-[#0f426c] font-medium">
                                    Mật khẩu
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8fc0db]" />
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
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
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="rememberMe"
                                        checked={formData.rememberMe}
                                        onCheckedChange={(checked) =>
                                            setFormData((prev) => ({ ...prev, rememberMe: checked as boolean }))
                                        }
                                        className="border-[#a7d5ec] data-[state=checked]:bg-[#0f426c] data-[state=checked]:border-[#0f426c]"
                                    />
                                    <Label htmlFor="rememberMe" className="text-sm text-[#507588] cursor-pointer">
                                        Ghi nhớ đăng nhập
                                    </Label>
                                </div>
                                <Link
                                    to="/forgot-password"
                                    className="text-sm text-[#3087fe] hover:text-[#0f426c] font-medium transition-colors"
                                >
                                    Quên mật khẩu?
                                </Link>
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
                                        <span>Đang xử lý...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <span>Đăng nhập</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                )}
                            </Button>
                        </form>

                        {/* Sign Up Link */}
                        <p className="text-center mt-6 text-[#507588]">
                            Chưa có tài khoản?{" "}
                            <Link
                                to="/register"
                                className="text-[#3087fe] hover:text-[#0f426c] font-semibold transition-colors"
                            >
                                Đăng ký ngay
                            </Link>
                        </p>
                    </div>

                    {/* Footer */}
                    <p className="text-center mt-6 text-sm text-[#507588]">
                        Bằng việc đăng nhập, bạn đồng ý với{" "}
                        <Link to="/payment-terms" className="text-[#3087fe] hover:underline">
                            Điều khoản dịch vụ
                        </Link>{" "}
                        và{" "}
                        <Link to="/warranty-policy" className="text-[#3087fe] hover:underline">
                            Chính sách bảo mật
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
