import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "product-information",
    question: "Product Information",
    answer: [
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
      "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.",
    ],
  },
  {
    id: "shipping-details",
    question: "Shipping Details",
    answer: [
      "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days",
      "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.",
    ],
  },
  {
    id: "return-policy",
    question: "Return Policy",
    answer: [
      "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
      "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
    ],
  },
];

function FaqAccordion() {
  return (
    <div className="w-full max-w-[543px] rounded-xl border border-border bg-background p-5">
      <Accordion
        type="single"
        defaultValue={faqs[0].id}
        className="w-full max-w-[503px]"
      >
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

const meta: Meta<typeof FaqAccordion> = {
  title: "UI/Accordion",
  component: FaqAccordion,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FaqAccordion>;

export const Default: Story = {};

export const ToggleInteraction: Story = {
  name: "Toggle item (QA test)",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /shipping details/i });
    await userEvent.click(trigger);
    const panel = await canvas.findByText(/worldwide shipping/i);
    await expect(panel).toBeVisible();
  },
};
