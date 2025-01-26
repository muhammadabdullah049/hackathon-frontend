import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button, Form, Input, Modal, Select } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppRoutes } from "../../../constant/constant";

const loanCategories = [
  {
    title: "Home Loan",
    description: "Affordable loans for building or renovating your dream home.",
    image:
      "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subCategories: [
      {
        title: "New Home Loan",
        description: "Loans to help you buy a new house.",
      },
      {
        title: "Renovation Loan",
        description: "Loans for home renovation projects.",
      },
      {
        title: "Refinance Loan",
        description: "Refinance your current mortgage for better rates.",
      },
    ],
  },
  {
    title: "Business Loan",
    description: "Support for startups or business expansion.",
    image:
      "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subCategories: [
      {
        title: "Startup Loan",
        description: "Loans for starting a new business.",
      },
      {
        title: "Expansion Loan",
        description: "Funding to expand your business.",
      },
      {
        title: "Working Capital Loan",
        description: "Loans for business working capital.",
      },
    ],
  },
  {
    title: "Education Loan",
    description: "Empowering education with low-interest loans.",
    image:
      "https://images.pexels.com/photos/3778154/pexels-photo-3778154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subCategories: [
      {
        title: "Undergraduate Loan",
        description: "Financial support for undergraduate studies.",
      },
      {
        title: "Postgraduate Loan",
        description: "Loans for pursuing postgraduate education.",
      },
      {
        title: "Study Abroad Loan",
        description: "Loans for studying overseas.",
      },
    ],
  },
  {
    title: "Personal Loan",
    description: "Flexible loans for your personal financial needs.",
    image:
      "https://images.pexels.com/photos/4386337/pexels-photo-4386337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subCategories: [
      {
        title: "Debt Consolidation",
        description: "Loans to consolidate your debt.",
      },
      {
        title: "Emergency Loan",
        description: "Quick loans for urgent needs.",
      },
      {
        title: "Medical Loan",
        description: "Loans to cover medical expenses.",
      },
    ],
  },
];

const yearsOptions = [
  { label: "1 Year", value: 1 },
  { label: "2 Years", value: 2 },
  { label: "3 Years", value: 3 },
  { label: "5 Years", value: 5 },
  { label: "10 Years", value: 10 },
];

const Hero = () => {
  const [loanCategories, setLoanCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentSubCategory, setCurrentSubCategory] = useState(null);

  useEffect(() => {
    const fetchLoanCategories = async () => {
      try {
        const response = await axios.get(AppRoutes.loanCategories);
        console.log("loanCategoriesRes=>", response.data); // Logging the parsed data directly

        const fetchedData = response.data;
        console.log("fetchedData=>", fetchedData);


        if (response.headers["content-type"].includes("application/json")) {
          setLoanCategories(response.data.loanCategory);
        } else {
          console.error("Invalid JSON response");
        }
      } catch (error) {
        console.error("Failed to fetch loan categories:", error.message);
      }
    };

    fetchLoanCategories();
  }, []);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const requestData = {
          // Replace these fields with the actual required fields
          field1: "value1",
          field2: "value2",
        };

        const response = await axios.post(
          AppRoutes.subLoanCategories,
          requestData
        );
        console.log("Sub-response=>", response.data);
      } catch (error) {
        console.error(
          "Error fetching sub-loan categories:",
          error.response?.data || error.message
        );
      }
    };
    fetchSubCategories();
    fetchSubCategories();
  }, []);
  const handleLearnMoreClick = (category) => {
    setSelectedCategory(category);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (subCategory) => {
    setCurrentSubCategory(subCategory);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentSubCategory(null);
  };

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const loanAmount = values.loanAmount - values.initialAmount; // Subtract initial payment
    const loanTermMonths = values.loanTerm * 12; // Convert years to months
    const annualInterestRate = 10; // Assuming an annual interest rate of 10%
    const monthlyInterestRate = annualInterestRate / 100 / 12; // Monthly interest rate

    const emi =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTermMonths)) /
      (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);

    Modal.success({
      title: "Loan Calculation",
      content: `Your monthly payment (EMI) will be approximately RS${emi.toFixed(
        2
      )}.`,
    });

    navigate("/loan-form-details", {
      state: {
        loanAmount: values.loanAmount,
        loanTerm: values.loanTerm,
        initialAmount: values.initialAmount,
        details: values.details,
        emi: emi.toFixed(2),
      },
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-tr from-white to-gray-50 text-gray-900 shadow-md">
        <div className="relative overflow-hidden">
          {/* Decorative Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-white to-gray-300 opacity-60"></div>

          {/* Main Content */}
          <div className="py-18">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-3">
              <div className="relative z-10 pb-24 sm:pb-32 md:pb-40 lg:max-w-2xl lg:w-full lg:pb-48">
                <main className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Headline */}
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-tight text-gray-900">
                      Empower Your{" "}
                      <span className="text-indigo-700">Financial Goals</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-lg leading-relaxed sm:mt-8 sm:text-xl md:leading-loose text-gray-600">
                      Unlock personalized loan solutions to help you achieve{" "}
                      <br /> your dreams—whether it{"'"}s building a home,
                      starting a<br /> business, or advancing your education.
                    </p>

                    {/* Call-to-Actions */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      {/* Explore Loans */}
                      <a
                        href="#loan-categories"
                        className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-4 text-white font-medium hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                        Explore Loans
                      </a>

                      {/* Apply Now */}
                      <a
                        href="#"
                        className="inline-flex items-center rounded-full bg-gray-300 px-8 py-4 text-gray-800 font-medium hover:bg-gray-400 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14m-7-7v14"
                          />
                        </svg>
                        Apply Now
                      </a>
                    </div>
                  </motion.div>
                </main>
              </div>
            </div>
          </div>

          {/* Right Side Decorative Image */}
          <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
            <div className="relative h-full w-full">
              {/* Shadow Container for Decorative Image */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-200 opacity-30"></div>
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Financial Goals"
                className="h-full w-full object-cover rounded-bl-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Loan Categories Section */}
      <section
        id="loan-categories"
        className="py-16 bg-white sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Loan Categories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose from a variety of loan categories designed to fit your
              needs.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {loanCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative rounded-lg bg-gray-100 shadow-lg overflow-hidden"
              >
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <p className="mt-2 text-gray-600">{category.description}</p>
                  <div className="mt-4">
                    <button
                      onClick={() => handleLearnMoreClick(category)}
                      className="inline-block border-none outline-none rounded-lg px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Show Subcategories if a category is selected */}
      {selectedCategory ? (
        <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-extrabold text-gray-800">
            {selectedCategory.title} - Subcategories
          </h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {selectedCategory.subCategories.map((subCategory, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                onClick={() => showModal(subCategory)}
              >
                <h4 className="text-xl font-semibold">{subCategory.title}</h4>
                <p className="mt-2 text-gray-600">{subCategory.description}</p>
              </motion.div>
            ))}
          </div>

          {currentSubCategory && (
            <Modal
              title={`Details for ${currentSubCategory.title}`}
              open={isModalVisible}
              onCancel={handleCancel}
              footer={null}
              width={600}
            >
              <Form
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={{}}
              >
                <Form.Item
                  label="Loan Amount"
                  name="loanAmount"
                  rules={[
                    { required: true, message: "Please enter loan amount" },
                  ]}
                >
                  <Input placeholder="Enter loan amount" />
                </Form.Item>
                <Form.Item
                  label="Loan Term (in years)"
                  name="loanTerm"
                  rules={[
                    { required: true, message: "Please select loan term" },
                  ]}
                >
                  <Select placeholder="Select loan term">
                    {yearsOptions.map((option) => (
                      <Select.Option key={option.value} value={option.value}>
                        {option.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Initial Amount"
                  name="initialAmount"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the initial amount",
                    },
                  ]}
                >
                  <Input placeholder="Enter initial amount" />
                </Form.Item>
                <Form.Item
                  label="Additional Details"
                  name="details"
                  rules={[{ required: false }]}
                >
                  <Input.TextArea placeholder="Additional details (optional)" />
                </Form.Item>
                <div className="flex justify-end">
                  <Button type="primary" htmlType="submit">
                    Proceed to Request
                  </Button>
                </div>
              </Form>
            </Modal>
          )}
        </div>
      ) : (
        <div className="text-center text-lg text-gray-500">
          Please select a category
        </div>
      )}

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why Choose Us?
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg"
            >
              <h3 className="text-lg font-bold">Easy Loan Process</h3>
              <p className="mt-2 text-gray-600">
                Apply with minimal paperwork and fast approvals.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg"
            >
              <h3 className="text-lg font-bold">Flexible Terms</h3>
              <p className="mt-2 text-gray-600">
                Customize loan terms based on your financial needs.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg"
            >
              <h3 className="text-lg font-bold">Low Interest Rates</h3>
              <p className="mt-2 text-gray-600">
                Competitive rates across all categories.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Take the Next Step?
          </h2>
          <p className="mt-4 text-lg">
            Achieve your goals with our micro-finance solutions.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="rounded-lg bg-white px-6 py-3 text-indigo-600 font-medium hover:bg-gray-100"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
