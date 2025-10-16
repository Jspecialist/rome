import { useState } from "react";
import { X, Lock, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

interface ClientCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ClientCodeModal({ isOpen, onClose }: ClientCodeModalProps) {
  const { t } = useTranslation();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  // VIP codes (you can expand this list)
  const validCodes = ["VIP2024", "ELITE789", "PREMIUM456", "EXCLUSIVE123"];
  
  // VIP emergency number (hidden until verified)
  const emergencyNumber = "(507) 888-XXXX";

  const handleVerify = () => {
    setIsVerifying(true);
    setError("");

    // Simulate verification delay
    setTimeout(() => {
      if (validCodes.includes(code.toUpperCase())) {
        setIsVerified(true);
        setError("");
      } else {
        setError(t("contact.emergency.modal.error"));
        setCode("");
      }
      setIsVerifying(false);
    }, 1000);
  };

  const resetState = () => {
    setCode("");
    setError("");
    setIsVerified(false);
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          handleClose();
        }
      }}
    >
      <DialogContent className="sm:max-w-[500px] bg-background border-accent/20">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-6 w-6 text-accent" />
            <DialogTitle className="text-2xl font-semibold text-primary">
              {t("contact.emergency.modal.title")}
            </DialogTitle>
          </div>
          <DialogDescription className="text-muted-foreground">
            {t("contact.emergency.modal.description")}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {!isVerified ? (
            <>
              <div className="space-y-4">
                <div className="bg-accent/5 border border-accent/10 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-accent mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      {t("contact.emergency.modal.notice")}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clientCode" className="text-foreground font-medium">
                    {t("contact.emergency.modal.code_label")}
                  </Label>
                  <Input
                    id="clientCode"
                    type="password"
                    placeholder={t("contact.emergency.modal.code_placeholder")}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className={`uppercase ${error ? 'border-destructive' : ''}`}
                    onKeyPress={(e) => e.key === 'Enter' && handleVerify()}
                  />
                  {error && (
                    <p className="text-sm text-destructive mt-1">{error}</p>
                  )}
                </div>

                <Button 
                  onClick={handleVerify} 
                  className="w-full bg-accent hover:bg-accent/90"
                  disabled={!code || isVerifying}
                >
                  {isVerifying ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t("contact.emergency.modal.verifying")}
                    </span>
                  ) : (
                    t("contact.emergency.modal.verify_button")
                  )}
                </Button>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {t("contact.emergency.modal.success_title")}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("contact.emergency.modal.success_description")}
                </p>
                
                <div className="bg-background border-2 border-accent/30 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-2xl font-bold text-accent tracking-wider">
                      {emergencyNumber}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {t("contact.emergency.modal.available_24_7")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={() => window.location.href = `tel:${emergencyNumber.replace(/[^\d]/g, '')}`}
                  className="flex-1 bg-accent hover:bg-accent/90"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {t("contact.emergency.modal.call_now")}
                </Button>
                <Button 
                  onClick={handleClose}
                  variant="outline"
                  className="flex-1"
                >
                  {t("contact.emergency.modal.close")}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}