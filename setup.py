from setuptools import setup, find_packages

setup(
    name="gantt_wrapper",
    version="0.1.0",
    packages=find_packages(),
    include_package_data=True,
    install_requires=["streamlit >= 1.0.0"],
    author="Manus AI",
    author_email="ai@manus.im",
    description="Streamlit component wrapper for a JavaScript Gantt chart with bidirectional communication.",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/manus-ai/gantt_wrapper",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)
