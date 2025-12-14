'use client'
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Paper,
} from "@mui/material";
import {
  Person as PersonIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Message as MessageIcon,
} from "@mui/icons-material";
import { colors } from "@/utils/colors";
import { usePostUserMessages } from "../../hooks/postUserMessages";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { mutate, isPending } = usePostUserMessages();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation (production-safe)
    if (!form.name || !form.email || !form.phone || !form.message) {
      console.warn("All fields required");
      return;
    }

    mutate(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
      {
        onSuccess: () => {
          console.log("Message saved successfully");
          setForm({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
          toast.success("Message sent successfully!");
        },
        onError: (err) => {
          console.error("Failed to send message:", err.message);
          toast.error("Failed to send message. Please try again.");
        },
      }
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        px: { xs: 2, md: 4 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: "700px",
          p: { xs: 3, md: 4 },
          bgcolor: "#111827",
          borderRadius: 2,
          border: "1px solid #1e293b",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: 800,
            color: "#10B981",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Contact Us
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          {/* Name */}
          <TextField
            fullWidth
            name="name"
            label="Name"
            variant="outlined"
            value={form.name}
            onChange={handleChange}
            required // Mark field as required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "#10B981" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#f3f4f6",
                "& fieldset": { borderColor: colors.primaryGreen },
                "&:hover fieldset": { borderColor: "#10B981" },
                "&.Mui-focused fieldset": {
                  borderColor: "#10B981",
                  boxShadow: "0 0 0 2px rgba(16,185,129,0.2)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#9ca3af",
                "&.Mui-focused": { color: "#10B981" },
                "&.Mui-error": { color: "#ef4444" }, // Style for error state
              },
            }}
          />

          {/* Phone */}
          <TextField
            fullWidth
            name="phone"
            label="Phone"
            variant="outlined"
            value={form.phone}
            onChange={handleChange}
            required // Mark field as required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: "#10B981" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#f3f4f6",
                "& fieldset": { borderColor: colors.primaryGreen },
                "&:hover fieldset": { borderColor: "#10B981" },
                "&.Mui-focused fieldset": {
                  borderColor: "#10B981",
                  boxShadow: "0 0 0 2px rgba(16,185,129,0.2)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#9ca3af",
                "&.Mui-focused": { color: "#10B981" },
                "&.Mui-error": { color: "#ef4444" }, // Style for error state
              },
            }}
          />

          {/* Email */}
          <TextField
            fullWidth
            name="email"
            label="Email"
            variant="outlined"
            value={form.email}
            onChange={handleChange}
            required // Mark field as required
            type="email" // Add email type for better validation
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "#10B981" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#f3f4f6",
                "& fieldset": { borderColor: colors.primaryGreen },
                "&:hover fieldset": { borderColor: "#10B981" },
                "&.Mui-focused fieldset": {
                  borderColor: "#10B981",
                  boxShadow: "0 0 0 2px rgba(16,185,129,0.2)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#9ca3af",
                "&.Mui-focused": { color: "#10B981" },
                "&.Mui-error": { color: "#ef4444" }, // Style for error state
              },
            }}
          />

          {/* Message */}
          <TextField
            fullWidth
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            value={form.message}
            onChange={handleChange}
            required // Mark field as required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MessageIcon sx={{ color: "#10B981", mt: 0.5 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#f3f4f6",
                "& fieldset": { borderColor: colors.primaryGreen },
                "&:hover fieldset": { borderColor: "#10B981" },
                "&.Mui-focused fieldset": {
                  borderColor: "#10B981",
                  boxShadow: "0 0 0 2px rgba(16,185,129,0.2)",
                },
                alignItems: "flex-start",
              },
              "& .MuiInputLabel-root": {
                color: "#9ca3af",
                "&.Mui-focused": { color: "#10B981" },
                "&.Mui-error": { color: "#ef4444" }, // Style for error state
              },
            }}
          />

          {/* Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              disabled={isPending}
              sx={{
                px: 4,
                py: 1.5,
                bgcolor: "#10B981",
                color: "#ffffff",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#0ea371",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                },
                "&.Mui-disabled": { // Style for disabled state
                  bgcolor: "#3f4757", 
                  color: "#aeb4be",
                },
                transition: "all 0.3s ease",
              }}
            >
              {isPending ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactForm;
